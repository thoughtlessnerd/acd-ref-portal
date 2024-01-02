import React from 'react'

import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import {
    FieldValues,
    SubmitHandler,
    useForm, Controller
} from "react-hook-form";

import Select from 'react-select'

import useRegisterModal from "../hooks/useRegisterModal.ts";
import useLoginModal from "../hooks/useLoginModal.ts";

import Modal from "./Modal.tsx";
import Input from "../components/Input.tsx";
import Heading from "../components/Heading.tsx";
import Button from "../components/Button.tsx";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            organization: {},
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log(data);
        // axios.post('/api/register', data)
        //     .then(() => {
        //         toast.success('Registered!');
        //         registerModal.onClose();
        //         loginModal.onOpen();
        //     })
        //     .catch((error) => {
        //         toast.error(error);
        //     })
        //     .finally(() => {
        //         setIsLoading(false);
        //     })
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])



    const bodyContent = (
        <div className="flex flex-col gap-2">
            <Heading
                title="Welcome to ACD Refferal"
                subtitle="Create an account!"
            />
            <div className='flex gap-1'>

                <Input
                    id="firstName"
                    label="First Name"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />

                <Input
                    id="lastName"
                    label="Last Name"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>

            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Controller
                name="organization"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={[
                            { value: "Microsoft", label: "Microsoft" },
                            { value: "Morgan Stanley", label: "Morgan Stanley" },
                            { value: "Adobe", label: "Adobe" },
                        ]}
                    />
                )}
            />

        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button

                label="Login with Google"
                icon={FcGoogle}
                onClick={() => (console.log("google"))}
            />

            <div
                className="
        text-gray-100
          text-center 
          mt-4 
          font-light
        "
            >
                <p>Already have an account ?
                    <span
                        onClick={onToggle}
                        className="
            text-gray-200
              cursor-pointer 
              hover:underline
            "
                    > Log in</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default RegisterModal;