import React, { Suspense, type ErrorInfo } from 'react'
import { PageError } from 'widgets/PageError'

interface IErrorBoundaryProps {
  children: React.ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor (props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log('Произошла ошибка', errorInfo, error)
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=''>
        <PageError />
      </Suspense>
    }

    return children
  }
}

export default ErrorBoundary
