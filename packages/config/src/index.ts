import { join } from 'path';
import yaml = require('js-yaml');
import { readFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { cloneDeep } from 'lodash';

//缓存配置,配置全局只需要读取一遍！
let cacheConfig: null | Record<string, any> = null;
export function getConfig(path?: string): any {
  const mode = process.env.RUNNING_ENV || 'dev';
  const configFileName = `config.${mode}.yaml`;
  const config = cacheConfig ? cacheConfig : readConfig(configFileName);
  let res = cloneDeep(config);
  if (typeof path === 'string') {
    const paths = path.split('.');
    for (const p of paths) {
      if (/\[\d]/.test(p)) {
        const index = parseInt(p[1]);
        res = index > -1 ? (isObj(res) ? res[index] : '') : '';
      } else {
        res = res[p] ?? '';
      }
    }
  }
  return res;
}

function isObj(obj: any) {
  return obj instanceof Object;
}

function readConfig(filePath: string): Record<string, any> {
  filePath = join(__dirname, filePath);
  cacheConfig = yaml.load(readFileSync(filePath, { encoding: 'utf8' }));
  return cacheConfig;
}

export function getSequelizeConfig(alter: boolean): Record<string, any> {
  const sqlConfig = getConfig('mysql');
  const sequelizeConfig = getConfig('sequelize');
  return {
    ...sqlConfig,
    ...sequelizeConfig,
    sync: {
      alter: alter,
    },
    dialect: getConfig('settings.dialect'),
  };
}
