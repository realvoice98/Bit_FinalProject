import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
//STYLES
import styled from 'styled-components';
import {useSelector} from "react-redux";


function AlarmMy({data}) {
    const [gosuLists, setGosuLists] = useState([{name:'user1',_idx:32},{name:'user2',_idx:33}]);
    const [isToggleHeight, setIsToggleHeight] = useState(false);
    // const [matchedLists, setMatchedLists] = useState([{name:'gosu1',_idx:30},{name:'gosu2',_idx:31}]);
    const [matchedUserLists, setMatchedUserLists] = useState([{name:'user1',_idx:32},{name:'user2',_idx:33}]);
    const user_info = useSelector((state) => state.user.user);
    const viewGosuList = () => {
        setIsToggleHeight(prev => !prev);
    };
    console.log(data)
    const goToGosuDetail = id => {
        window.location.href = id
    }
    const goToUserDetail = id => {
        window.location.href = id
    }

    return (
        <Container>
            <Box>
                {
                    user_info.role == 'ROLE_GOSU' ?
                        (<>
                            <WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>
                        <Estimation onClick={()=>{
                            window.location.href='/GosuDetail'
                        }}>프로필</Estimation>
                    <GosuListBox onClick={viewGosuList}>
                    <GosuListText>요청온 채팅 && 매칭 리스트</GosuListText>
                {isToggleHeight ? (
                    <IoIosArrowUp className="listIcon" />
                    ) : (
                    <IoIosArrowDown className="listIcon" />
                    )}
                    </GosuListBox>
                    <ListWrap className={isToggleHeight ? 'active' : null}>
                {data.map((AlarmList, i) => {
                    return (
                    <List key={i}>
                        <ListImg alt="gosu_image" src='/images/4.jpg' />
                        <Estimation  style={{marginBottom:'0px',marginLeft:'10px'}}>{AlarmList.content}</Estimation>
                        <Estimation style={{marginBottom:'0px',marginLeft:'70px',color:'red'}} onClick={()=>{
                            goToUserDetail(AlarmList.url)
                        }}>확인</Estimation>
                    </List>
                    );
                })}
                    </ListWrap>
                            </>) :
                    (<>
                        <WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>
                    <GosuListBox onClick={viewGosuList}>
                    <GosuListText >요청온 채팅 && 매칭 리스트</GosuListText>
                {isToggleHeight ? (
                    <IoIosArrowUp className="listIcon" />
                    ) : (
                    <IoIosArrowDown className="listIcon" />
                    )}
                    </GosuListBox>
                    <ListWrap className={isToggleHeight ? 'active' : null}>
                {data.map((AlarmList, i) => {
                    return (
                    <List key={i}>
                    <ListImg alt="gosu_image" src='/images/4.jpg' />
                    <Estimation  style={{marginBottom:'0px',marginLeft:'10px'}}>{AlarmList.content}</Estimation>
                        <Estimation style={{marginBottom:'0px',marginLeft:'70px',color:'red'}} onClick={()=>{
                            goToGosuDetail(AlarmList.url)
                        }}>확인</Estimation>
                    </List>
                    );
                })}
                    </ListWrap>
                    </>)
                }
                {/*<WelcomeName>안녕하세요, {user_info.nickname}님</WelcomeName>*/}
                {/*<Estimation>받은 견적</Estimation>*/}
                {/*<Estimation>프로필</Estimation>*/}
                {/*<GosuListBox onClick={viewGosuList}>*/}
                {/*    <GosuListText>요청온 고수 리스트</GosuListText>*/}
                {/*    {isToggleHeight ? (*/}
                {/*        <IoIosArrowUp className="listIcon" />*/}
                {/*    ) : (*/}
                {/*        <IoIosArrowDown className="listIcon" />*/}
                {/*    )}*/}
                {/*</GosuListBox>*/}
                {/*<ListWrap className={isToggleHeight ? 'active' : null}>*/}
                {/*    {matchedLists.map((matchedList, i) => {*/}
                {/*        return (*/}
                {/*            <List key={i}>*/}
                {/*                <ListImg alt="gosu_image" src='/images/4.jpg' />*/}
                {/*                <ListName>위범석</ListName>*/}
                {/*            </List>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</ListWrap>*/}

            </Box>
        </Container>
    );
}

export default AlarmMy;

const Container = styled.div`
  ${({ theme }) => theme.flex('center', 'center', null)};
  position: absolute;
  top: 50px;
  right: 0;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 5px 10px hsla(0, 0%, 0%, 0.4);
  z-index: 11;
  margin-top : 20px;
  margin-right : 250px;
`;

const Box = styled.div`
  ${({ theme }) => theme.flex('center', 'flex-start', 'column')};
`;

const WelcomeName = styled.h2`
  margin-bottom: 30px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: bold;
`;

const Estimation = styled.p`
  margin-bottom: 30px;
  font-size: 15px;
  cursor: pointer;
`;

const GosuListBox = styled.div`
  ${({ theme }) => theme.flex('flex-start', 'center', 'row')};
  margin-bottom: 20px;
  cursor: pointer;
  .listIcon {
    margin-bottom: 3px;
  }
`;

const GosuListText = styled.p`
  padding-right: 5px;
  font-size: 15px;
  cursor: pointer;
`;

const ListWrap = styled.ul`
  width: 100%;
  height: 100px;
  overflow-y: hidden;
  &.active {
    height: auto;
  }
`;

const List = styled.li`
  ${({ theme }) => theme.flex('flex-start', 'center', null)};
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const ListImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const ListName = styled.p`
  ${({ theme }) => theme.flex('flex-start', 'center', null)};
  margin: 2px 0 0 10px;
`;