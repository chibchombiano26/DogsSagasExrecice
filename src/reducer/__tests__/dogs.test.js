import { reducer } from "../dogs";

describe("dogs reducer test", () => {
  it("Check reducer funcionality", () => {
    const initialState = {
      fetching: false,
      dog: {
        message: ""
      },
      error: null
    };

    const dog = {
      status: "success",
      message: "https://images.dog.ceo/breeds/shihtzu/n02086240_271.jpg"
    };

    const result = reducer(initialState, {
      type: "API_CALL_SUCCESS",
      dog
    });

    expect(result).toEqual({ dog: dog, error: null, fetching: false });
  });
});
