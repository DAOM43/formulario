import PersonalForm from './components/PersonalForm'

export default function App() {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Detalles personales</h5>
                <PersonalForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}