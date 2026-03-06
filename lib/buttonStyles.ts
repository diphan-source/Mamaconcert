import { SxProps, Theme } from '@mui/material/styles';

export const homeButtonBaseSx: SxProps<Theme> = {
  minHeight: 48,
  px: { xs: 3.5, md: 4.5 },
  py: 1.5,
  fontSize: { xs: '0.9rem', md: '0.98rem' },
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  borderRadius: '10px',
  boxShadow: '0 8px 22px rgba(0, 0, 0, 0.22)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
};

const hoverLift = {
  transform: 'translateY(-2px)',
  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.28)',
};

export const homeButtonPrimaryOnDarkSx: SxProps<Theme> = {
  ...homeButtonBaseSx,
  backgroundColor: '#ffffff',
  color: '#111827',
  border: '1px solid rgba(255,255,255,0.75)',
  '&:hover': {
    ...hoverLift,
    backgroundColor: '#f3f4f6',
  },
};

export const homeButtonSecondaryOnDarkSx: SxProps<Theme> = {
  ...homeButtonBaseSx,
  backgroundColor: 'rgba(255, 255, 255, 0.14)',
  color: '#ffffff',
  border: '1px solid rgba(255,255,255,0.45)',
  backdropFilter: 'blur(8px)',
  '&:hover': {
    ...hoverLift,
    backgroundColor: 'rgba(255, 255, 255, 0.26)',
    borderColor: 'rgba(255,255,255,0.72)',
  },
};

export const homeButtonPrimaryOnLightSx: SxProps<Theme> = {
  ...homeButtonBaseSx,
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: '1px solid #2563eb',
  '&:hover': {
    ...hoverLift,
    backgroundColor: '#1d4ed8',
    borderColor: '#1d4ed8',
  },
};

export const homeButtonSecondaryOnLightSx: SxProps<Theme> = {
  ...homeButtonBaseSx,
  backgroundColor: 'transparent',
  color: '#2563eb',
  border: '2px solid #2563eb',
  boxShadow: 'none',
  '&:hover': {
    ...hoverLift,
    backgroundColor: 'rgba(37, 99, 235, 0.08)',
    borderColor: '#1d4ed8',
    color: '#1d4ed8',
    boxShadow: '0 10px 24px rgba(37, 99, 235, 0.22)',
  },
};
