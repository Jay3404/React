import React, { createElement } from 'react';
import styled, {css} from 'styled-components';

//테스트용 더미 카테고리
const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비지니스'
    },
    {
        name: 'entertainments',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    & + & {
        margin-left: 1rem;
    }

    ${props => 
        props.active && css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `
    }
`;

const Categories = ({category, changeCategory}) => {
  return (
    <CategoriesBlock>
        {categories && categories.map(
            cate => (
                <Category key={cate.name} onClick={() => changeCategory(cate.name)} active={category === cate.name}>{cate.text}</Category>
            )
        )}
    </CategoriesBlock>
  );
};

export default Categories