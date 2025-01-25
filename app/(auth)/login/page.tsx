"use client"

import React, { useState } from 'react'

// components
import DynamicInput from '@/components/DynamicInput'
import SubmitButton from '@/components/SubmitButton';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const router = useRouter();

    const validateUsername = () => {
        if (!username) {
          return "İstifadəçi adı boş olmamalıdır.";
        }
        if (!/[A-Z]/.test(username)) {
          return "İstifadəçi adında ən az bir böyük hərf olmalıdır.";
        }
        if (/\d/.test(username)) {
          return "İstifadəçi adında rəqəm olmaz.";
        }
        return "";
    };

    const validatePassword = () => {
        if (!password) {
          return "Şifrə boş olmamalıdır.";
        }
        if (!/[A-Z]/.test(password)) {
          return "Şifrədə ən az bir böyük hərf olmalıdır.";
        }
        if (!/\d/.test(password)) {
          return "Şifrədə ən az bir rəqəm olmalıdır.";
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
          return "Şifrədə ən az bir simvol istifadə olunmalıdır.";
        }
        if (password.length < 8) {
            return "Şifrə ən az 8 karakter olmalı.";
        }
        if (password.length > 15) {
        return "Şifrə ən çox 15 karakter olmalı.";
        }

        return "";
    };

    const handleSubmit = () => {
        const usernameError = validateUsername();
        const passwordError = validatePassword();

        if (usernameError || passwordError) {
            setErrors({
              username: usernameError,
              password: passwordError,
            });

            return;
        }

        // Hatalar yoksa
        setErrors({ username: "", password: "" });
        router.push("/dashboard");
    };
  return (
    <form  onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
         <DynamicInput
            label="İstifadəçi adı"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
        />

        <DynamicInput
            label="Şifrə"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
        />

        <SubmitButton title="Daxil Ol" onClick={handleSubmit} />
    </form>
  )
}

export default LoginPage