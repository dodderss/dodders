import { useState, type ChangeEvent, type FormEvent } from 'react'


const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined
const ENDPOINT = FORMSPREE_ID
  ? `https://formspree.io/f/${FORMSPREE_ID}`
  : null

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface UseContactFormReturn<T> {
  form: T
  status: FormStatus
  errorMessage: string | null
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent) => Promise<void>
}

export function useContactForm<T extends Record<string, string>>(
  empty: T,
): UseContactFormReturn<T> {
  const [form, setForm] = useState<T>(empty)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setErrorMessage(null)

    if (!ENDPOINT) {
      // No Formspree ID configured — show success anyway in dev so you can
      // style the success state without needing a real submission.
      console.warn('[useContactForm] VITE_FORMSPREE_ID not set. Simulating success.')
      setStatus('success')
      return
    }

    setStatus('submitting')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = (await res.json()) as { errors?: { message: string }[] }
        throw new Error(data.errors?.[0]?.message ?? 'Submission failed')
      }

      setStatus('success')
      setForm(empty)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    }
  }

  return { form, status, errorMessage, handleChange, handleSubmit }
}
