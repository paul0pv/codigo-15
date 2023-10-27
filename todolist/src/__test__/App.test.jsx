import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

describe("Render App component", () => {
    it("Test App flow", () => {
        render(<App />);
        const title = screen.getByText("Crear cuenta");
        const button = screen.getByLabelText("Crear cuenta");
        expect(title).toBeInTheDocument();
        fireEvent.click(button);
        const errors = screen.getAllByText("Este campo es requerido");
        expect(errors).toHaveLength(4);
    });

    it("Test SignUp", () => {
        const response = {
            json: vi.fn().mockResolvedValue(mockUserResponse),
        }

        global.fetch = vi.fn().mockResolvedValue(response);

        render(<App />);
        const inputName = screen.getByLabelText("name");
        const inputLastame = screen.getByLabelText("Lastname");
        const inputEmail = screen.getByLabelText("email");
        const inputPassword = screen.getByLabelText("password");
    
        fireEvent.change(inputName, {target: { value: "Pepe"}});
        fireEvent.change(inputLastame, {target:{}});
        fireEvent.change(inputEmail, {target:{}});
        fireEvent.change(inputPassword, {target:{}});
        
        const button = screen.getByLabelText("Crear cuenta");
        fireEvent.click(button);
    })
})