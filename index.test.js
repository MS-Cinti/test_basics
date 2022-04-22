const search = require("./index")

const mockDb = ["codecool2", "cool cat2", "frontend is so cool2", "dog2", "cool school2", "day2", "cool day2", "bad day2"]

it("This is my first test.", () => {
    expect("hello").toEqual("hello")
    search(mockDb, "cool")
})


it("Search with empty result.", () => {
    expect(search(mockDb, "zzz")).toEqual([])
})


it("Real search with cool keyword, expected non-empty array as a result.", () => {
    expect(search(mockDb, "cool")).toEqual(["codecool2", "cool cat2", "frontend is so cool2", "cool school2", "cool day2"])
})