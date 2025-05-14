interface CopyrightTextProps {
    className?: string;
};


export const CopyrightText = ({ className }: CopyrightTextProps) => {
    return (
        <p className={className}>Copyright © 2025 KSQ Pergamino. Todos los derechos reservados</p>
    );
};