import { Result } from './base';
import { HttpStatus } from '@nestjs/common';

type FailType = 'request' | 'server';
export class Res {
  /**
   * 响应成功
   * @param message 响应消息
   * @constructor
   */
  public static Ok(message = '成功') {
    return Result(HttpStatus.OK, null, message);
  }
  /**
   * 带数据的响应成功
   * @param data 响应数据
   * @param message 响应信息
   * @constructor
   */
  public static OkWithData<T>(data: T, message = '成功') {
    return Result<T>(HttpStatus.OK, data, message);
  }

  /**
   * 分页数据的成功响应
   * @param list 数据列表
   * @param total
   * @param message 响应提示消息
   * @constructor
   */
  public static OkWithPage<T>(list: T[], total: number, message = '成功') {
    return Result(HttpStatus.OK, { list, total }, message);
  }

  /**
   * 普通列表数据非分页查询
   * @param list
   * @param message
   * @constructor
   */
  public static OkWithList<T>(list: T[], message = '成功') {
    return Result(HttpStatus.OK, list, message);
  }

  /**
   * 自定义响应吗返回
   * @param code
   * @param data
   * @param message
   * @constructor
   */
  public static ResultByCode<T extends any>(
    code: HttpStatus,
    data: T = null,
    message = '',
  ) {
    return {
      code,
      data,
      message,
    };
  }

  /**
   * 失败返回，默认时请求出错
   * @param data
   * @param message
   * @param type
   * @constructor
   */
  public static Fail<T>(data: T, message = '', type: FailType = 'server') {
    return Result(
      type === 'server'
        ? HttpStatus.BAD_REQUEST
        : HttpStatus.INTERNAL_SERVER_ERROR,
      data,
      message,
    );
  }

  /**
   * 自定义错误信息返回
   * @param err
   * @param type
   * @param data
   * @constructor
   */
  public static FailWithError<T>(
    err: Error,
    type: FailType = 'server',
    data?: T,
  ) {
    return Res.Fail(data, err.message, type);
  }

  /**
   * 自定义错误响应码的错误返回
   * @param code
   * @param data
   * @param message
   * @constructor
   */
  public static FailWithCode<T>(
    code: HttpStatus,
    data: T = null,
    message = '',
  ) {
    return Res.ResultByCode(code, data, message);
  }
}
