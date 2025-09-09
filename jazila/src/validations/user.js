import { z } from "zod";

export const userSchema = z.object({
    firstName: z
        .string({
            required_error: "First name is required",
            invalid_type_error: "First name must be a valid string",
        })
        .trim()
        .min(2, { message: "First name must be 2 or more characters long" }),

    lastName: z
        .string({
            required_error: "Last name is required",
            invalid_type_error: "Last name must be a valid string",
        })
        .trim()
        .min(2, { message: "Last name must be 2 or more characters long" }),

    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .trim()
        .email({ message: "Invalid email address" }),

    avatar: z
        .string({
            required_error: "Avatar is required",
            invalid_type_error: "Avatar must be a valid string",
        })
        .trim()
        .min(2, { message: "Avatar must be 2 or more characters long" }),

    contact: z
        .string({
            invalid_type_error: "Contact must be a valid string",
        })
        .min(11, { message: "Contact must be 11 or more characters long" }),

    password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a valid string",
        })
        .trim()
        .min(8, { message: "Password must be 8 or more characters long" }),
});

export const AddressSchema = z.object({
    default: z.boolean({
        invalid_type_error: "Default must be a valid boolean",
    }),

    street: z
        .string({
            required_error: "Street Address is required",
            invalid_type_error: "Street Address must be a valid string",
        })
        .min(2, { message: "Street Address must be 2 or more characters long" }),

    country: z
        .string({
            required_error: "Country is required",
            invalid_type_error: "Country must be a valid string",
        })
        .min(2, { message: "Country must be 2 or more characters long" }),

    city: z
        .string({
            required_error: "City is required",
            invalid_type_error: "City must be a valid string",
        })
        .min(2, { message: "City must be 2 or more characters long" }),

    state: z
        .string({
            required_error: "State is required",
            invalid_type_error: "State must be a valid string",
        })
        .min(2, { message: "State must be 2 or more characters long" }),

    zip: z
        .string({
            required_error: "Zip is required",
            invalid_type_error: "Zip must be a valid string",
        })
        .min(2, { message: "Zip must be 2 or more characters long" }),
});

export const UserAddressSchema = z.object({
    street: z
        .string({
            required_error: "Street Address is required",
            invalid_type_error: "Street Address must be a valid string",
        })
        .min(2, { message: "Street Address must be 2 or more characters long" }),

    default: z.boolean(),

    name: z
        .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a valid string",
        })
        .min(2, { message: "Name must be 2 or more characters long" }),

    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .trim()
        .email({ message: "Invalid email address" }),

    phone: z
        .string({
            invalid_type_error: "Phone must be a valid string",
        })
        .min(8, { message: "Phone must be 8 or more characters long" }),

    country: z
        .string({
            required_error: "Country is required",
            invalid_type_error: "Country must be a valid string",
        })
        .min(2, { message: "Country must be 2 or more characters long" }),

    city: z
        .string({
            required_error: "City is required",
            invalid_type_error: "City must be a valid string",
        })
        .min(2, { message: "City must be 2 or more characters long" }),

    state: z
        .string({
            required_error: "State is required",
            invalid_type_error: "State must be a valid string",
        })
        .min(2, { message: "State must be 2 or more characters long" }), postcode: z
            .string({
                required_error: "Postcode is required",
                invalid_type_error: "Postcode must be a valid string",
            })
            .min(2, { message: "Postcode must be 2 or more characters long" }),
});