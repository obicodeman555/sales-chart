import { Request, Response } from "express";
import { RegisterValidation } from "../validation/register.validation";

export const Register = (req: Request, res: Response) => {
    const body = req.body;
    const { error } = RegisterValidation.validate(body);

    if (error) {
        return res.status(400).send(error.details);
    }

    if (body.password !== body.passwordConfirmation) {
        return res.status(400).send({
            message: "The two passwords do not match!!"
        })
    }

    res.send(body);
}