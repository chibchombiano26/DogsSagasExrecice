import { mapStateToProps } from "../dogsList";

describe("Testing map state to props", () => {
  it("should map the state correctly", () => {
    const state = {
      dog: {
        fetching: false,
        error: null,
        dog: {
          message:
            "https://images.dog.ceo/breeds/weimaraner/n02092339_3837.jpg",
          status: "success"
        }
      }
    };

    const componetState = mapStateToProps(state);
    expect(componetState).toEqual(state.dog);
  });
});
