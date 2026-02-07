// "use client";
// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Box, Typography, Container, Button } from "@mui/material";

// const TransportationSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <Box
//       id="transportation"
//       component="section"
//       ref={ref}
//       sx={{
//         py: { xs: 10, md: 16 },
//         bgcolor: 'white',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//         >
//           <Box sx={{ textAlign: 'center', mb: 8 }}>
//             <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' }, fontWeight: 900, color: 'black', mb: 4, textTransform: 'uppercase', lineHeight: 1.2 }}>
//               BOOK A TABLE <br />NOW 
//             </Typography>
//             <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'black', maxWidth: '48rem', mx: 'auto', mb: 4 }}>
//               Reserve a Table for {' '}
//               <Typography component="span" sx={{ color: '#1e40af', fontWeight: 700 }}>
//                 10
//               </Typography>
//               {' '}with a Drink 
//             </Typography>
//           </Box>
//         </motion.div>
//         {/* for Contact info   */}
//         title : for More Information or to book contact the following 
//         create code with three people and their contacts below the names in a three column foe mat here for booking tables 

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <Box sx={{ textAlign: 'center' }}>
//             <Button
//               component="a"
//               href="https://form.typeform.com/to/Ij072pJa?typeform-source=helicon-dinosaur-2nx4.squarespace.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               variant="contained"
//               data-testid="tf-v1-popup"
//               sx={{
//                 bgcolor: 'black',
//                 color: 'white',
//                 px: 4,
//                 py: 2,
//                 borderRadius: '0.5rem',
//                 fontWeight: 700,
//                 textTransform: 'none',
//                 fontSize: '1rem',
//                 '&:hover': {
//                   bgcolor: '#333',
//                 }
//               }}
//             >
//               Register Now for Reservation
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default TransportationSection;

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GridLegacy from "@mui/material/GridLegacy";
import { GridLegacy as Grid } from "@mui/material";
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
} from "@mui/material";

const TransportationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      id="transportation"
      component="section"
      ref={ref}
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem", lg: "3.75rem" },
                fontWeight: 900,
                color: "black",
                mb: 4,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              BOOK A TABLE 
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.8rem",
                color: "black",
                maxWidth: "48rem",
                mx: "auto",
              }}
            >
              Reserve a Table for{" "}
              <Typography
                component="span"
                sx={{ color: "#1e40af", fontWeight: 700 }}
              >
                10
              </Typography>{" "}
              with a Drink
            </Typography>
            <br />
              <Typography
              variant="body1"
              sx={{
                fontSize: "2.5rem",
                color: "black",
                maxWidth: "48rem",
                mx: "auto",
              }}
            >
              For More Information {" "}
              <Typography
                component="span"
                sx={{ color: "#1e40af", fontWeight: 900 , frontSize:"2.5rem"}}
              >
                &amp;
              </Typography>{" "}
             Table Booking
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                mb: 6,
                textTransform: "uppercase",
              }}
            >
            
            </Typography>
          
  
<Grid container spacing={4}>
  {/* Contact 1 */}
  <Grid item xs={12} md={4}>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Denis 
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1 }}>
        Table Reservations
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        📞 +1 (437) 499-2450
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        ✉️ reservations@mamaconcert.com
      </Typography>
    </Paper>
  </Grid>

  {/* Contact 2 */}
  <Grid item xs={12} md={4}>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Doreen Kahunde
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1 }}>
        VIP & Group Bookings
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        📞 +1 (437) 388-6384
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        ✉️ reservations@mamaconcert.com
      </Typography>
    </Paper>
  </Grid>

  {/* Contact 3 */}
  <Grid item xs={12} md={4}>
    <Paper
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Pastor David Kalasira
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 1 }}>
       Table Reservation
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        📞 +1 (437) 232-4417
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        ✉️ reservations@mamaconcert.com
      </Typography>
    </Paper>
  </Grid>
</Grid>
          </Box>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Button
              component="a"
              href="https://form.typeform.com/to/Ij072pJa?typeform-source=helicon-dinosaur-2nx4.squarespace.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                px: 4,
                py: 2,
                borderRadius: "0.5rem",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              Register Now for Reservation
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TransportationSection;
