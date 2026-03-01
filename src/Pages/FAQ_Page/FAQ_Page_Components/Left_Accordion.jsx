import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function Left_Accordion() {
  return (
    <div>
      <Accordion defaultExpanded sx={{ backgroundColor: "transparent", color: "#fff", width: "620px", boxShadow: "none", borderBottom: "1px solid #d9dadb", borderTop: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Сколько стоит билет?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Цена билета может зависеть от дня недели, времени и формата. Поэтому вы можете ознакомиться с актуальными ценами, перейдя на нужный фильм в расписании на главной странице.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent", color: "#fff", width: "620px", boxShadow: "none", borderBottom: "1px solid #d9dadb", borderTop: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Сколько стоит билет?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Цена билета может зависеть от дня недели, времени и формата. Поэтому вы можете ознакомиться с актуальными ценами, перейдя на нужный фильм в расписании на главной странице.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "transparent", color: "#fff", width: "620px", boxShadow: "none", borderBottom: "1px solid #d9dadb", borderTop: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{ fontWeight: 600, fontSize: "1.125rem" }}>Сколько стоит билет?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mt: -2.5, fontSize: "0.875rem", lineHeight: "1.25rem", color: "#d9dadb" }}>
          Цена билета может зависеть от дня недели, времени и формата. Поэтому вы можете ознакомиться с актуальными ценами, перейдя на нужный фильм в расписании на главной странице.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}