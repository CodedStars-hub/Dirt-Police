export function MunicipalTicketBadge({ ticketId }: { ticketId: string }) {
  return <span className="ticket-badge">Ref: {ticketId}</span>;
}
