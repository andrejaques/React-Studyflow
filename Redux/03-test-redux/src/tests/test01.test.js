import App from "../App";
import { renderWithRedux } from "../helpers/renderWithRedux";

describe("testing clicks", () => {
    test("a click in a button should increment the value of clicks", () => {
        const { queryByText } = renderWithRedux(<App />, {
            initialState: { clickReducer: { counter: 5 } },
        });

        expect(queryByText("5")).toBeInTheDocument();
    });
});
