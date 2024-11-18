import { FormEvent, useState } from "react";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../services/firebase";
import { Container } from "../../components/container";
import { FormContainer } from "../../components/formContainer";
import { Button } from "../../components/button";


export function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();


    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (email === "" || senha === "") {
            return;
        }

        await signInWithEmailAndPassword(auth, email, senha)
            .then(data => {
                console.log(data);
                navigate("/admin");
            })
            .catch(() => {
                toast.error("Dados invalidos");
            })
    }

    return (
        <Container>
            <FormContainer handleSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <Button>Entrar</Button>
            </FormContainer>
        </Container>
    );
}