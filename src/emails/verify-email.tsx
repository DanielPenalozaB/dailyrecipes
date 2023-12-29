interface EmailTemplateProps {
    username: string;
}

export const VerifyEmail: React.FC<Readonly<EmailTemplateProps>> = ({
    username,
}) => (
    <div>
        <h1>Welcome, {username}!</h1>
    </div>
);
