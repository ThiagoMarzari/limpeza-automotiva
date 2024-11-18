export interface userDataProps {
    email: string;
    password: string;
}

// export interface userDataProps {
//     token: string;
//     name: string;
// }


const apiUrl = "http://localhost:8080/auth";

export async function registerUser(userData: userDataProps) {
    const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    return response;
};

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
             "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`	
    })
    
    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Save the token in the local storage
        return data;
    }
    else {
        console.log(response);
        throw new Error("Login failed");
    }
}