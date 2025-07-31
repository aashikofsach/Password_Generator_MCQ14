import { useState } from "react"

function usePasswordGenerator() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    function generatePassword(checkboxData, length) {
        let charset = "";
        let generatePassword = "";

        const selectedOption = checkboxData.filter(checkbox => checkbox.state);

        if (selectedOption?.length === 0) {
            setError("please select atleast one checkBox");
            setPassword("");
            console.log(error, password)
            return
        }


        selectedOption.forEach(element => {
            switch (element.title) {
                case ("Include Uppercase Letters"):
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case ("Include Lowercase Letters"):
                    charset += "abcdefghijklmnopqrstuvwxyz"
                    break;
                case ("Include Numbers"):
                    charset += "0123456789"
                    break;
                case ("Include Symbols"):
                    charset += "!@#$%^&*()";
                    break
            }

        });

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * charset.length);
            generatePassword += charset[randomIndex];
        }

        setPassword(generatePassword);
        setError("");


    }
    return { password, error, generatePassword }
}

export default usePasswordGenerator