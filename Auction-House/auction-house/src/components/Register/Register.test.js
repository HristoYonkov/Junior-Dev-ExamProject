import { render, screen, fireEvent, } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Login } from './Login'
import { AuthContext } from "../../context/AuthContext";

describe("Login Component", () => {

    const mockedUser = {
        user: false,
    };

    it("renders without crashing", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockedUser}>
                    <Login />
                </AuthContext.Provider>
            </Router>
        );

        const loginTestId = screen.getByTestId("email");
        expect(loginTestId).toBeInTheDocument();
    });

    // it("updates the email state when email input is changed", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );

    //     const emailInput = screen.getByTestId("email");
    //     fireEvent.change(emailInput, { target: { value: "test@abv.bg" } });
    //     expect(emailInput.value).toBe("test@abv.bg");
    // });

    // it("updates the password state when password input is changed", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );

    //     const passwordInput = screen.getByTestId("password");
    //     fireEvent.change(passwordInput, { target: { value: 123 } });
    //     expect(passwordInput.value).toBe("123");
    // });

    // it("renders error for password shorter than 3 characters", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );
    //     const passwordInput = screen.getByTestId("password");
    //     fireEvent.change(passwordInput, { target: { value: 12 } });
    //     fireEvent.blur(passwordInput);
    //     expect(
    //         screen.getByText("Password must be between 3 and 10 characters!")
    //     ).toBeInTheDocument();
    // });

    // it("renders error for password longer than 10 characters", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );
    //     const passwordInput = screen.getByTestId("password");
    //     fireEvent.change(passwordInput, { target: { value: 12345678910 } });
    //     fireEvent.blur(passwordInput);
    //     expect(
    //         screen.getByText("Password must be between 3 and 10 characters!")
    //     ).toBeInTheDocument();
    // });

    // it("renders error for invalid email", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );
    //     const emailInput = screen.getByTestId("email");
    //     fireEvent.change(emailInput, { target: { value: "test" } });
    //     fireEvent.blur(emailInput);
    //     expect(
    //         screen.getByText("Invalid email!")
    //     ).toBeInTheDocument();
    // });

    // it("it redirects after successful login", () => {
    //     render(
    //         <Router>
    //             <AuthContext.Provider value={mockedUser}>
    //                 <Login />
    //             </AuthContext.Provider>
    //         </Router>
    //     );
    //     const emailInput = screen.getByTestId("email");
    //     const passwordInput = screen.getByTestId("password");

    //     const loginButton = screen.getByTestId('loginButton');

    //     fireEvent.change(emailInput, { target: { value: "test@abv.bg" } });
    //     // fireEvent.blur(emailInput);
    //     fireEvent.change(passwordInput, { target: { value: 1234 } });
    //     // fireEvent.blur(passwordInput);
    //     fireEvent.submit(loginButton);
    //     expect(window.location.href).toEqual("http://localhost/");
    // });
});