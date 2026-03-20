import { useMemo, useState } from 'react'
import { createSalesAppointment } from '../services/salesAppointment.api'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  productName: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
}

function todayIso() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(values.email.trim())) {
      errors.email = 'Email format is invalid.'
    }
  }

  if (!values.productName.trim()) {
    errors.productName = 'Product name is required.'
  }

  if (!values.preferredDate) {
    errors.preferredDate = 'Preferred date is required.'
  }

  if (!values.preferredTime) {
    errors.preferredTime = 'Preferred time is required.'
  }

  return errors
}

export default function SalesAppointmentForm() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const minDate = useMemo(() => todayIso(), [])

  function handleChange(event) {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((previous) => {
        const next = { ...previous }
        delete next[name]
        return next
      })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setSuccessMessage('')
    setErrorMessage('')

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    try {
      setIsSubmitting(true)
      const created = await createSalesAppointment(values)

      setSuccessMessage(
        `Appointment created successfully. Appointment ID: ${created?.id ?? 'generated on server'}`,
      )
      setValues(initialForm)
      setErrors({})
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            autoComplete="name"
          />
          {errors.fullName && <span className="field-error">{errors.fullName}</span>}
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="+52 662 123 4567"
            autoComplete="tel"
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="jane@email.com"
            autoComplete="email"
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </label>

        <label>
          Product name
          <input
            name="productName"
            value={values.productName}
            onChange={handleChange}
            placeholder="Product X"
          />
          {errors.productName && <span className="field-error">{errors.productName}</span>}
        </label>

        <label>
          Preferred date
          <input
            name="preferredDate"
            type="date"
            min={minDate}
            value={values.preferredDate}
            onChange={handleChange}
          />
          {errors.preferredDate && <span className="field-error">{errors.preferredDate}</span>}
        </label>

        <label>
          Preferred time
          <input
            name="preferredTime"
            type="time"
            value={values.preferredTime}
            onChange={handleChange}
          />
          {errors.preferredTime && <span className="field-error">{errors.preferredTime}</span>}
        </label>

        <label className="notes-field">
          Notes (optional)
          <textarea
            name="notes"
            rows="4"
            value={values.notes}
            onChange={handleChange}
            placeholder="Any preference we should know?"
          />
        </label>
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Saving appointment...' : 'Schedule Appointment'}
      </button>

      {successMessage && <p className="form-success">{successMessage}</p>}
      {errorMessage && <p className="form-error">{errorMessage}</p>}
    </form>
  )
}
