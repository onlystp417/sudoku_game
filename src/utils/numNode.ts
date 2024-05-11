class numNode {
  private value: number
  private isActive: boolean

  constructor(value: number, isAvtive: boolean) {
    this.value = value
    this.isActive = isAvtive
  }

  public getValue() {
    return this.value;
  }

  public getIsActive() {
    return this.isActive;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setIsActive(isAvtive: boolean) {
    this.isActive = isAvtive;
  }
}

export default numNode