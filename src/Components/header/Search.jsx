import { InputBase, Box, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
background: white;
margin-left: 10px;
width: 30%;
border-radius:10px;
display: flex;
`;

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width: 100%;
`


const Search = () => {
    return(
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more" />
            <Box>
                <SearchIcon />
            </Box>
        </SearchContainer>
        
    )
}

export default Search