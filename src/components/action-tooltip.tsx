import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface ActionToolTipProps {
  label: string
  children: React.ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  align?: 'start' | 'end' | 'center'
}

export const ActionToolTip = ({ align, children, label, side }: ActionToolTipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align}>
          <p className='font-semibold text-sm capitalize'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
