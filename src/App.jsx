import SalesAppointmentForm from './components/SalesAppointmentForm'
import './App.css'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'same-origin via Vite proxy (/api)'

function App() {
  return (
    <main className="page">
      <div className="backdrop" aria-hidden="true" />

      <section className="hero reveal first">
        <p className="eyebrow">POC Meta Demo</p>
        <h1>Book a Sales Appointment</h1>
        <p className="lead">
          Capture customer details in one step and send them directly to the backend API endpoint
          <code>/api/v1/sales-appointments</code>.
        </p>
        <p className="api-meta">
          API base URL: <strong>{apiBaseUrl}</strong>
        </p>
      </section>

      <section className="panel reveal second">
        <h2>Customer Appointment Form</h2>
        <p className="panel-copy">
          Fill in the customer information and preferred date/time to create a new sales appointment.
        </p>
        <SalesAppointmentForm />
      </section>
    </main>
  )
}

export default App
