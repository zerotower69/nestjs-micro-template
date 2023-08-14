import { HttpStatus } from '@nestjs/common';

/**
 * 最后接口返回的数据格式
 * @param code 严格按照http的响应码来的
 * @param data
 * @param msg
 * @constructor
 */
export function Result<T>(code: HttpStatus, data: T, msg: string) {
  return {
    code,
    data,
    msg,
  };
}
