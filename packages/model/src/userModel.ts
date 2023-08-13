import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Comment,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'sys_user',
  timestamps: true,
})
class UserModel extends Model {
  @PrimaryKey
  @AllowNull(false)
  @Comment('id')
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  //用户名不易过长
  @AllowNull(false)
  @Comment('用户名')
  @Column(DataType.STRING(28))
  username: string;

  @Comment('昵称')
  @Column(DataType.STRING(40))
  nickname: string;

  @AllowNull(false)
  @Comment('密码')
  @Column(DataType.STRING(140))
  password: string;
}

export { UserModel };
