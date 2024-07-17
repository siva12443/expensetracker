import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel"; 
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import '../index.css'

export default function Login() {
    const [value, setValue] = useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
            <form class="flex flex-col items-center justify-center gap-4 w-full max-w-[400px] p-8 bg-white rounded-2xl shadow-md border border-gray-300">
                <span class="flex flex-col gap-2 w-full">
                    <label for="email" class="self-start text-[#58bc82] font-semibold">Email</label>
                    <input type="email" name="email" id="email" class="rounded-lg p-4 w-full border-none flex items-center gap-2 bg-[#9c9c9c60] outline outline-2 outline-[#707070] focus:outline-[#58bc82]" />
                </span>
                <span class="flex flex-col gap-2 w-full">
                    <label for="password" class="self-start text-[#58bc82] font-semibold">Password</label>
                    <input type="password" name="password" id="password" class="rounded-lg p-4 w-full border-none flex items-center gap-2 bg-[#9c9c9c60] outline outline-2 outline-[#707070] focus:outline-[#58bc82]" />
                </span>
                <span class="text-[#707070]">
                    <a href="#" class="text-[#58bc82]">Forgot password?</a>
                </span>
                <input type="submit" value="Log in" class="p-4 w-full flex items-center gap-2 rounded-full bg-[#707070] text-[#efefef] border-none cursor-pointer transition-all duration-300 font-semibold text-sm hover:bg-[#58bc82] hover:text-[#707070]" />
                <span class="text-[#707070]">Don't have an account? <a href="#" class="text-[#58bc82]">Sign up</a></span>
            </form>
        </div>
    )
}