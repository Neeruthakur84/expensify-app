let add = (a, b) => {
    return a + b
}

test ("Shoul add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
})