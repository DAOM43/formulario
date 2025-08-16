import { useState, type FormEvent } from 'react'

type Genero = 'masculino' | 'femenino'

export default function PersonalForm() {
  const [saludo, setSaludo] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [genero, setGenero] = useState<Genero | ''>('')
  const [email, setEmail] = useState('')
  const [fechaNac, setFechaNac] = useState('')
  const [direccion, setDireccion] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const payload = { saludo, nombre, apellido, genero, email, fechaNac, direccion }
    // aquí puedes mandar a tu backend con fetch/axios
    console.log('Datos enviados:', payload)
    alert('Formulario enviado. Revisa la consola 👍')
  }

  return (
    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
      {/* Saludo */}
      <div className="mb-3">
        <label htmlFor="saludo" className="form-label">Saludo</label>
        <select
          id="saludo"
          className="form-select"
          value={saludo}
          onChange={(e) => setSaludo(e.target.value)}
        >
          <option value="">– Ninguno –</option>
          <option>Sr.</option>
          <option>Sra.</option>
          <option>Srta.</option>
          <option>Ing.</option>
          <option>Lic.</option>
          <option>Dr.</option>
        </select>
      </div>

      {/* Nombre y Apellido (dos columnas en pantallas medianas+) */}
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            id="nombre"
            type="text"
            className="form-control"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            id="apellido"
            type="text"
            className="form-control"
            placeholder="Escribe tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Género */}
      <div className="mt-3 mb-3">
        <span className="form-label d-block mb-1">Género</span>
        <div className="d-flex gap-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="genMasculino"
              value="masculino"
              checked={genero === 'masculino'}
              onChange={() => setGenero('masculino')}
              required
            />
            <label className="form-check-label" htmlFor="genMasculino">
              Masculino
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="genFemenino"
              value="femenino"
              checked={genero === 'femenino'}
              onChange={() => setGenero('femenino')}
              required
            />
            <label className="form-check-label" htmlFor="genFemenino">
              Femenino
            </label>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Fecha de nacimiento */}
      <div className="mb-3">
        <label htmlFor="fecha" className="form-label">Fecha de nacimiento</label>
        <input
          id="fecha"
          type="date"
          className="form-control"
          value={fechaNac}
          onChange={(e) => setFechaNac(e.target.value)}
          required
        />
      </div>

      {/* Dirección */}
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">Dirección</label>
        <textarea
          id="direccion"
          className="form-control"
          rows={4}
          placeholder="Escribe tu dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  )
}