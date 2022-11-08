/**
 * @constructor
 * @classdesc メンバーについての情報を管理します
 * @param {string} firstName　姓
 * @param {string} lastName　名
 * @throws {Error} firstNameかlastNameが足りません
 * @author Taiki Wakabayashi
 * @version 1.0.0
 */

class Member {
  public firstName: string;

  public lastName: string;

  constructor(firstName: string, lastName: string) {
    if (firstName === undefined || lastName === undefined) {
      throw new Error("firstNameかlastNameが足りません");
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * メンバーに関する詳細情報を表示します。
   * @return {string} メンバーの名前
   * @deprecated {@link Member#toString} メソッドを代わりに利用してください
   */
  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  /**
   * memberクラスの内容を文字列化します。
   * @return {string} メンバーの氏名
   */
  toString(): string {
    return this.firstName + " " + this.lastName;
  }
}
