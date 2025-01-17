import React, {useState} from "react"
import { Container, Tab, Tabs , Button} from "react-bootstrap";

const api = (window as any).api;

export const Platform: React.FC = () => {
    type platform = {
        id: number;
        name: string;
        password: string;
        username: string;
        id_user: string;
        connect: boolean;
    }

    const [platforms, setPlatforms] = useState<platform[]>([]);
   
    api.getAllPlatform().then((result: []) =>{
        var data : platform[] = []
        result.forEach(element =>{
            data.push(element as platform)
        })
        setPlatforms(data)
    }).catch(console.error);

    return (
        <section className="platform-section">
            <Container fluid>
                <h1 className="title-page">Plataformas</h1>
                <Button variant="outline-light" className="button-new" href="/platform/0">Novo</Button>
                <div className="body-page">
                    {platforms?.length > 0 ? (<Tabs defaultActiveKey="xbox"
                        id="uncontrolled-tab-example"
                        className="mb-3">
                        {platforms.map((platform) => 
                                <Tab eventKey={platform.id} title={platform.name}>
                                    Tab content for {platform.name}
                                </Tab>
                        )}
                        </Tabs>)
                        :(<div>Erro</div>)
                    }
                </div>
            </Container>
        </section>
    );
}