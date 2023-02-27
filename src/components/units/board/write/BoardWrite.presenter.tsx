import {
    Address,
    ButtonWrapper,
    Contents,
    Error,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
} from "./BoardWrite.emotions";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IBoardWriterUIProps } from "./BoardWrite.typescript";

export default function BoardWriterUI(props: IBoardWriterUIProps) {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { isSubmitting, isDirty, errors },
    } = useForm();

    const [activeButton, setActiveButton] = useState(false);

    const checkAllInputs = () => {
        const data = getValues();

        if (data.writer && data.password && data.title && data.contents) {
            setActiveButton(true);
        } else {
            setActiveButton(false);
        }
    };

    useEffect(() => {
        console.log(props.data);
        setValue("writer", props.data?.fetchBoard?.writer);
        setValue("title", props.data?.fetchBoard?.title);
        setValue("contents", props.data?.fetchBoard?.contents);
        setValue("zipcode", props.data?.fetchBoard?.boardAddress?.zipcode);
        setValue("address", props.data?.fetchBoard?.boardAddress?.address);
        setValue("addressDetail", props.data?.fetchBoard?.boardAddress?.addressDetail);
        setValue("youtubeUrl", props.data?.fetchBoard?.youtubeUrl);
    }, [props.data]);

    return (
        <Wrapper>
            <Title>게시물 {props.isEdit ? "수정" : "등록"}</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer
                        aria-invalid={!isDirty ? undefined : errors.email ? "true" : "false"}
                        type="text"
                        placeholder="이름을 적어주세요"
                        {...register("writer", {
                            required: "작성자는 필수 입력입니다.",
                        })}
                        onBlur={checkAllInputs}
                    ></Writer>
                    <Error>{errors.writer && <small style={{ color: "red" }}>{errors.writer.message}</small>}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password
                        type="password"
                        placeholder="비밀번호를 작성해주세요"
                        aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                        {...register("password", {
                            required: "비밀번호는 필수 입력입니다.",

                            minLength: {
                                value: 8,
                                message: "8자리 이상 비밀번호를 사용하세요.",
                            },
                        })}
                        onBlur={checkAllInputs}
                    ></Password>
                    <Error>{errors.password && <small style={{ color: "red" }}>{errors.password.message}</small>}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject
                    type="text"
                    placeholder="제목을 작성하세요"
                    {...register("title", {
                        required: "제목은 필수 입력입니다.",
                    })}
                    onBlur={checkAllInputs}
                ></Subject>
                <Error>{errors.title && <small style={{ color: "red" }}>{errors.title.message}</small>}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents
                    placeholder="내용을 작성해주세요."
                    {...register("contents", {
                        required: "내용은 필수 입력입니다.",
                    })}
                    onBlur={checkAllInputs}
                />
                <Error>{errors.contents && <small style={{ color: "red" }}>{errors.contents.message}</small>}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode
                        placeholder="07250"
                        {...register("zipcode", {
                            required: "우편번호는 필수 입력입니다.",
                        })}
                    ></Zipcode>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Error>{errors.zipcode && <small style={{ color: "red" }}>{errors.zipcode.message}</small>}</Error>
                <Address
                    {...register("address", {
                        required: "첫번째 주소는 필수 입력입니다.",
                    })}
                />
                <Error>{errors.address && <small style={{ color: "red" }}>{errors.address.message}</small>}</Error>
                <Address {...register("addressDetail", {})} />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사하세요" {...register("youtubeUrl", {})} />
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio" id="youtubeUrl" name="radio-button" />
                <RadioLabel htmlFor="youtubeUrl">유튜브</RadioLabel>
                <RadioButton type="radio" id="images" name="radio-button" />
                <RadioLabel htmlFor="images">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton
                    activeButton={activeButton}
                    onClick={handleSubmit((data) => {
                        props.isEdit ? props.onClickUpdate(data) : props.onClickSubmit(data);
                    })}
                    disabled={isSubmitting}
                >
                    {props.isEdit ? "수정" : "등록"}하기
                </SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
