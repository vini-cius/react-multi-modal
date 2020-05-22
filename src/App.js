import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Row, Col, CardHeader, ListGroup, Card, Modal, ModalHeader, ModalBody, ModalFooter, Button, ListGroupItem } from 'reactstrap';

function App() {
  const [modal, setModal] = useState(null);

  const handleModalShow = id => setModal(id);

  const handleModalClose = () => setModal(null);

  const reportData = [
    {
      name: 'relatorio1',
      label: 'Relatório 1',
      content: 'Relatório 1'
    },
    {
      name: 'relatorio2',
      label: 'Relatório 2',
      content: 'Relatório 2'
    },
    {
      name: 'relatorio3',
      label: 'Relatório 3',
      content: 'Relatório 3'
    },
    {
      name: 'relatorio4',
      label: 'Relatório 4',
      content: 'Relatório 4'
    }
  ]

  return (
    <>
      <header>
        <h3>React Multiple Modal</h3>
      </header>

      <Row>
        <Col xs={12} sm={12} md={6} className="mt-3">
          <Card>
            <CardHeader><strong>RELATÓRIOS</strong></CardHeader>
            <ListGroup flush>
              {reportData.map((report, index) => (
                <React.Fragment key={index}>
                  <ListGroupItem
                    tag="button"
                    action
                    onClick={() => handleModalShow(report.name)}
                  >
                    {report.label}
                  </ListGroupItem>

                  <Modal isOpen={modal === report.name} toggle={handleModalClose}>
                    <ModalHeader toggle={handleModalClose}>{report.label}</ModalHeader>

                    <ModalBody>
                      {report.content}
                    </ModalBody>

                    <ModalFooter>
                      <Button color="secondary" onClick={handleModalClose}>Fechar</Button>
                    </ModalFooter>
                  </Modal>
                </React.Fragment>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default App;
