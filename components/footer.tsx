import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mx-auto mt-4 w-full max-w-3xl px-4 pb-8">
      <div className="glass rounded-3xl px-6 py-5 text-center">
        <p className="font-display text-sm font-semibold text-foreground">
          Shashi Madan Public School
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          SM Education City, Shiv Shakti Nagar, NH-509, Chandausi, Sambhal – 244414
        </p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-primary" />
            +91-9258159506
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-primary" />
            info@smpschandausi.com
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            smpschandausi.com
          </span>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          © 2026 Shashi Madan Public School. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
