import { FormEvent } from 'react';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Input } from '../../components/input';
import { FormContainer } from '../../components/formContainer';

export function Register() {

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

    }

    return (
        <Container>
            <FormContainer handleSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <Button>
                        Registrar
                    </Button>
                </FormContainer>
        </Container>
    );
}