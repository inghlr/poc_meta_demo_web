import { apiFetch } from './apiClient'

function normalizeTime(value) {
  if (!value) {
    return value
  }

  return value.length === 5 ? `${value}:00` : value
}

export async function createSalesAppointment(input) {
  const payload = {
    ...input,
    preferredTime: normalizeTime(input.preferredTime),
  }

  return apiFetch('/api/v1/sales-appointments', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
