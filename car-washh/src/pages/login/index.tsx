import { Button } from "../../components/button";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

export function Login() {
    return (
        <Container>
            <h1 className="text-4xl text-white text-center font-bold">
                Login
            </h1>
            <div className="w-full flex items-center justify-center">
                <form className="max-w-xl text-center">
                    <Input type="email" placeholder="email" />
                    <Input type="password" placeholder="senha" />
                    <Button>Entrar</Button>
                </form>
            </div>
        </Container>
    )
}