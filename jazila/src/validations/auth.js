import * as z from 'zod';

const authSchema = z.object({
    firstName: z
        .string({
            required_error: 'First name is required',
            invalid_type_error: 'First name must be a string',
        })
        .trim()
        .min(2, { message: 'First name must be 2 or more characters long' }),
    lastName: z
        .string({
            required_error: 'Last name is required',
            invalid_type_error: 'Last name must be a string',
        })
        .trim()
        .min(2, { message: 'Last name must be 2 or more characters long' }),
    email: z
        .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
        .trim()
        .email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .max(100),
    contact: z
        .string()
        .min(8, { message: 'Contact must be at least 11 characters long' })
        .optional(),
    avatar: z.string().optional(),
    passwordConfirm: z
        .string({
            required_error: 'Password confirmation value is required',
            invalid_type_error: 'Password confirmation value must be a string',
        })
        .trim(),
});

export const signupSchema = authSchema.refine(
    data => data.password === data.passwordConfirm,
    {
        message: 'Passwords do not match',
        path: ['passwordConfirm'],
    }
);

export const loginSchema = authSchema.omit({
    firstName: true,
    lastName: true,
    passwordConfirm: true,
});

export const profileSchema = authSchema.omit({
    password: true,
    passwordConfirm: true,
});

export const activateSchema = z.object({
    token: z.string(),
});

export const verifyEmailSchema = z.object({
    token: z
        .string()
        .min(6, { message: 'Verification code must be 6 characters long' })
        .max(6),
});

const changePassSchema = z.object({
    oldPassword: z.string().min(8, {
        message: 'Password must be at least 8 characters long',
    }),
    newPassword: z.string().min(8),
    newPasswordConfirm: z.string().min(8),
});

export const changePasswordSchema = changePassSchema.refine(
    data => data.newPassword === data.newPasswordConfirm,
    {
        message: 'Passwords do not match',
        path: ['newPasswordConfirm'],
    }
);

export const LoginWithGoogleParams = {
    credential: '',
};

export const mutationResponseSchema = {
    message: '',
};
export const loginResponseSchema = {
    message: '',
    token: '',
    expires_in: '',
    user: null,
};
export const mutationActivationResponse = {
    message: '',
    role: '',
};