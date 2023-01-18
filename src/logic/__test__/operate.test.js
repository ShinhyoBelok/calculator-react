import operate from "../operate";

describe('Testing operate', () => {
  test('Test x operation', () => {
    expect(operate("88", "1", "x")).toStrictEqual("88");
  });

  test('Test + operation', () => {
    expect(operate("88", "1", "+")).toStrictEqual("89");
  });

  test('Test ÷ operation', () => {
    expect(operate("30", "3", "÷")).toStrictEqual("10");
    expect(operate("30", "0", "÷")).toStrictEqual("Can't divide by 0.");
  });

  test('Test % operation', () => {
    expect(operate("100", "10", "%")).toStrictEqual("0");
  });
});