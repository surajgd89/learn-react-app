import { Button, Alert } from "react-bootstrap"



function ReactBootstrapInstall() {
    return (
        <div className="text-center">
            <h1>React Bootstrap Install</h1>
            <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis quidem necessitatibus explicabo eveniet dolorum quia! Repudiandae, et? Qui obcaecati et sapiente dolorem consectetur modi nostrum, tempore unde? Distinctio, corporis!
            </div>
            <Button onClick={() => alert()}>Click</Button>

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>

            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))
            }


        </div>
    )
}

export default ReactBootstrapInstall;