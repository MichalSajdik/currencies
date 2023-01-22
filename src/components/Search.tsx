import styled from "styled-components";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import { useNavigate  } from 'react-router-dom';

const SearchRowWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: grey;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(1px + 2vmin);
  color: white;
`

const SearchStyledDiv = styled.div`
  padding: 8px 8px 8px 16px;
`

const SearchStyledInput = styled.input`
  background-color: white;
  border-radius: 5px;
  height: calc(1px + 2vmin);
  font-size: calc(5px + 1vmin);
`

export default function Search() {
    const navigate  = useNavigate();
    const [searchValue, setSearchValue] = useState(window.location.pathname.substring(1))

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            navigate(`/${searchValue}`);
            navigate(0);
        }
    };

    return <SearchRowWrapper data-testid="search-row-wrapper">
        <SearchStyledDiv data-testid="search-styled-div">
            Search
        </SearchStyledDiv>
        <SearchStyledInput
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            autoFocus={true}
            data-testid="search-input"
        />
    </SearchRowWrapper>
}