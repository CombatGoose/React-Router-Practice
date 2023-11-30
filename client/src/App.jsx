import { useState } from "react"
const Main = () => { 

    const users = [
        {
            login: "Admin",
            password: "123qwe"
        }
    ]

    const [formData, setFormData] = useState(
        {
          login: "",
          password: ""  
        }
    )
    
    const handleChange = (formName, formValue) => { 
        setFormData(
            {
            ...formData,
            [formName]: formValue
            }
        )
    }

    const handleCheckFields = (formLogin, formPassword) => {
        users.forEach(el => {
            if(el.password === formPassword && el.login === formLogin) {
                alert("Registation has been succesful")
            }
        })
    }

    const location = useLocation()
    const navigate = useNavigate()
    const handleClick = () => { 
        navigate('/products')
    }
    return (
        <>
            <div>
                <input 
                    onChange={(e) => {
                        handleChange("login", e.target.value)
                    }}
                    type="text"
                    value={formData.login}
                    placeholder="Write login"
                />
                <input 
                    onChange={(e) => {
                        handleChange("password", e.target.value)
                    }}
                    type="password"
                    value={formData.password}
                    placeholder="Write password"
                />
            </div>

            <button onClick={handleClick}>Go to products</button>
        </>
    )
}

export default Main