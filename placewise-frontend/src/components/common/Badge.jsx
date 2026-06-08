/**
 * Badge — small status/label chip used throughout the app.
 *
 * variant: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'outline'
 * size:    'sm' | 'md'
 */
export default function Badge({ children, variant = 'default', size = 'md', className = '' }) {
  const base =
    'inline-flex items-center gap-1 font-medium rounded-full whitespace-nowrap'

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  }

  const variants = {
    default:  'bg-surface-subtle text-ink-secondary ring-1 ring-surface-border',
    success:  'bg-status-success-bg text-status-success ring-1 ring-status-success/30',
    warning:  'bg-status-warning-bg text-status-warning ring-1 ring-status-warning/30',
    danger:   'bg-status-danger-bg text-status-danger ring-1 ring-status-danger/30',
    info:     'bg-status-info-bg text-status-info ring-1 ring-status-info/30',
    purple:   'bg-brand-50 text-brand-700 ring-1 ring-brand-200',
    indigo:   'bg-brand-50 text-brand-700 ring-1 ring-brand-200',
    outline:  'bg-transparent text-ink-secondary ring-1 ring-surface-border',
  }

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant] ?? variants.default} ${className}`}>
      {children}
    </span>
  )
}

/**
 * StatusBadge — maps an application status string to the correct Badge variant.
 */
const STATUS_MAP = {
  applied:              { label: 'Applied',             variant: 'info' },
  under_review:         { label: 'Under Review',        variant: 'warning' },
  shortlisted:          { label: 'Shortlisted',         variant: 'indigo' },
  interview_scheduled:  { label: 'Interview Scheduled', variant: 'purple' },
  offer_received:       { label: 'Offer Received',      variant: 'success' },
  placed:               { label: 'Placed',              variant: 'success' },
  rejected:             { label: 'Rejected',            variant: 'danger' },
}

export function StatusBadge({ status, size = 'md' }) {
  const config = STATUS_MAP[status] ?? { label: status, variant: 'default' }
  return (
    <Badge variant={config.variant} size={size}>
      {config.label}
    </Badge>
  )
}

/**
 * SeverityBadge — maps a skill-gap severity level to a Badge.
 */
const SEVERITY_MAP = {
  critical: { label: 'Critical Gap', variant: 'danger' },
  moderate: { label: 'Moderate Gap', variant: 'warning' },
  ready:    { label: 'Ready to Apply', variant: 'success' },
}

export function SeverityBadge({ severity, size = 'md' }) {
  const config = SEVERITY_MAP[severity] ?? { label: severity, variant: 'default' }
  return (
    <Badge variant={config.variant} size={size}>
      {config.label}
    </Badge>
  )
}
