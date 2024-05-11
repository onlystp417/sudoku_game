export interface numNodeIntr {
  value: number
  isActive: boolean
  isNative: boolean
  getValue(): number
  getIsActive(): boolean
  setValue(): void
  setIsActive(): void
}

export class numNode {
  private value: number
  private isActive: boolean
  private isNative: boolean

  constructor(value: number, isAvtive: boolean, isNative: boolean) {
    this.value = value
    this.isActive = isAvtive
    this.isNative = isNative
  }

  public getValue(): number {
    return this.value;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getIsNative(): boolean {
    return this.isNative;
  }

  public setValue(value: number) {
    this.value = value;
  }

  public setIsActive(isAvtive: boolean) {
    this.isActive = isAvtive;
  }
}

export default numNode