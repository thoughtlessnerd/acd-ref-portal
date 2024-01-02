import React from 'react'

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

import useRegisterModal from "../hooks/useRegisterModal.ts";
import useLoginModal from "../hooks/useLoginModal.ts";

import Modal from "./Modal.tsx";
import Input from "../components/Input.tsx";
import Heading from "../components/Heading.tsx";
import Button from "../components/Button.tsx";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> =
        (data) => {
            // setIsLoading(true);

            // signIn('credentials', {
            //     ...data,
            //     redirect: false,
            // })
            //     .then((callback) => {
            //         setIsLoading(false);

            //         if (callback?.ok) {
            //             toast.success('Logged in');
            //             router.refresh();
            //             loginModal.onClose();
            //         }

            //         if (callback?.error) {
            //             toast.error(callback.error);
            //         }
            //     });
            console.log("xyz")
        }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-2">
            <Heading
                title="Welcome back"
                subtitle="Login to your account!"
            />
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
            <div className="
      text-gray-100 text-center mt-4 font-light">
                <p>First time using ACD Referral ?
                    <span
                        onClick={onToggle}
                        className="
              text-gray-200
              cursor-pointer 
              hover:underline
            "
                    > Create an account</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Login"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;