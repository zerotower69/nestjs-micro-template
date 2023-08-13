import { join } from 'path';
import yaml = require('js-yaml');
import { readFileSync } from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { cloneDeep } from 'lodash';
export function getConfig(mode: string, path?: string) {
  const configFileName = `config.${mode}.yaml`;
  const config = readConfig(configFileName);
  let res = cloneDeep(config);
  if (typeof path === 'string') {
    const paths = path.split(path);
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
  return yaml.load(readFileSync(filePath, { encoding: 'utf8' }));
}
