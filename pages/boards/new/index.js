
import { Address, ButtonWrapper, Contents, Error, ImageWrapper, InputWrapper, Label, OptionWrapper, Password, RadioButton, RadioLabel, SearchButton, Subject, SubmitButton, Title, UploadButton, Wrapper, Writer, WriterWrapper, Youtube, Zipcode, ZipcodeWrapper } from '../../../styles/emotion'
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function BoardWriteUI(){

    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm();
    const [data,setData] = useState({});

    function handleChange(e){
        setData({
            ...data,
            [e.target.name]:e.target.value
            }
        )
    }

    return(
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer 
                    aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                    name='writer' type='text' placeholder='이름을 적어주세요' onChange={handleChange} 
                    {...register('writer',{
                        required:'작성자는 필수 입력입니다.'
                    })}></Writer>
                    <Error>
                        {errors.writer && <small style={{color:'red'}}>{errors.writer.message}</small>}
                    </Error>
                </InputWrapper>
                <InputWrapper>
                <Label>비밀번호</Label>
                <Password 
                name='password' 
                type='password' 
                placeholder='비밀번호를 작성해주세요' 
                aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                onChange={handleChange} 
                {...register('password', {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      value: 8,
                      message: "8자리 이상 비밀번호를 사용하세요.",
                    },})}></Password>
                    <Error>
                {errors.password && <small style={{color:'red'}}>{errors.password.message}</small>}
            </Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject 
                name='subject' 
                type='text' 
                placeholder='제목을 작성하세요' 
                onChange={handleChange} 
                {...register('subject',{
                    required:'제목은 필수 입력입니다.'
                })}></Subject>
                 <Error>
                    {errors.subject && <small style={{color:'red'}}>{errors.subject.message}</small>}
                </Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents 
                name='contents' 
                placeholder='내용을 작성해주세요.' 
                onChange={handleChange} 
                {...register('contents',{
                    required:'내용은 필수 입력입니다.'
                })}/>
                 <Error>
                    {errors.contents && <small style={{color:'red'}}>{errors.contents.message}</small>}
                </Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode name='zipcode' placeholder='07250' onChange={handleChange} {...register('zipcode',{
                    required:'우편번호는 필수 입력입니다.'
                })}></Zipcode>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Error>
                    {errors.zipcode && <small style={{color:'red'}}>{errors.zipcode.message}</small>}
                </Error>
                <Address name='address1' onChange={handleChange} {...register('address1',{
                    required:'첫번째 주소는 필수 입력입니다.'
                })}/>
                <Error>
                    {errors.address1 && <small style={{color:'red'}}>{errors.address1.message}</small>}
                </Error>
                <Address name='address2' onChange={handleChange} {...register('address2')}/>
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube name='youtube' placeholder='링크를 복사하세요' onChange={handleChange} {...register('youtube')}/>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type='radio' id='youtube' name='radio-button'/>
                <RadioLabel htmlFor='youtube'>유튜브</RadioLabel>
                <RadioButton type='radio' id='image' name='radio-button'/>
                <RadioLabel htmlFor='image'>사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton 
                onClick={handleSubmit((data)=> alert(JSON.stringify(data)))}
                disabled={isSubmitting}
                >등록하기</SubmitButton> 
            </ButtonWrapper>
        </Wrapper>
    )
}